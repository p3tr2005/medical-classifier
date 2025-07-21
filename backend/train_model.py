# train_model.py

import pandas as pd
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.naive_bayes import MultinomialNB
from sklearn.model_selection import train_test_split
from sklearn.pipeline import Pipeline
from sklearn.metrics import classification_report
import joblib
import os

# Load dataset
df = pd.read_csv("data/mtsamples.csv")

# Bersihkan data: hapus baris kosong
df = df.dropna(subset=["transcription", "medical_specialty"])

# Ambil kolom yang dibutuhkan
texts = df["transcription"]
labels = df["medical_specialty"]

# Split data
X_train, X_test, y_train, y_test = train_test_split(
    texts, labels, test_size=0.2, random_state=42
)

# Buat pipeline: TF-IDF + Naive Bayes
pipeline = Pipeline([
    ("vectorizer", TfidfVectorizer(stop_words="english", max_features=5000)),
    ("classifier", MultinomialNB())
])

# Latih model
pipeline.fit(X_train, y_train)

# Evaluasi model
y_pred = pipeline.predict(X_test)
print("Classification Report:")
print(classification_report(y_test, y_pred))

# Simpan model dan vectorizer
os.makedirs("model", exist_ok=True)
joblib.dump(pipeline.named_steps["classifier"], "model/model.pkl")
joblib.dump(pipeline.named_steps["vectorizer"], "model/vectorizer.pkl")

print("✅ Model dan vectorizer berhasil disimpan ke folder 'model'")
