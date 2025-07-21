# app.py

from flask import Flask, request, jsonify
from flask_cors import CORS
import joblib
import os

# Inisialisasi Flask
app = Flask(__name__)

CORS(app)

# Load model dan vectorizer
model_path = "model/model.pkl"
vectorizer_path = "model/vectorizer.pkl"

if not os.path.exists(model_path) or not os.path.exists(vectorizer_path):
    raise FileNotFoundError("Model atau vectorizer belum dilatih. Jalankan train_model.py dulu.")

model = joblib.load(model_path)
vectorizer = joblib.load(vectorizer_path)

@app.route("/", methods=["GET"])
def index():
    return jsonify({"message": "Medical Text Classifier API is running."})

@app.route("/predict", methods=["POST"])
def predict():
    data = request.get_json()

    if not data or "text" not in data:
        return jsonify({"error": "Tolong sertakan field 'text'"}), 400

    text = data["text"]

    # Transformasi dan prediksi
    X = vectorizer.transform([text])
    prediction = model.predict(X)

    return jsonify({"category": prediction[0]})

if __name__ == "__main__":
    app.run(debug=True)
