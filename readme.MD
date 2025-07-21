# 🩺 Medical Specialty Classifier

Web aplikasi berbasis Machine Learning yang dapat memprediksi **kategori spesialisasi medis** berdasarkan teks transkripsi atau deskripsi medis.

---

## 📌 Fitur Utama

- 🧠 **Prediksi Kategori Medis**: Menentukan spesialisasi medis seperti *Cardiology*, *Radiology*, *Surgery*, dll. berdasarkan teks input.
- ⚙️ **Machine Learning**: Menggunakan model TF-IDF + Naive Bayes yang dilatih dari dataset *MTSamples*.
- 🌐 **Frontend**: Dibangun dengan Next.js untuk antarmuka yang cepat dan interaktif.
- 🔥 **Backend API**: Menggunakan Flask untuk menangani prediksi berbasis model ML.
- 📦 **Tanpa Backend Python di Frontend**: Semua komunikasi dilakukan melalui REST API Flask.

---

## 🧩 Arsitektur

- **Frontend**: Next.js (TypeScript + Tailwind)
- **Backend**: Flask API
- **Model ML**: Naive Bayes + TF-IDF vectorizer (joblib)
- **Dataset**: [MTSamples](https://www.kaggle.com/datasets/abbasdata/medical-transcriptions)

---

## 🚀 Cara Menjalankan

### 1. Clone Repository
```bash
git clone https://github.com/username/medical-specialty-classifier.git
cd medical-specialty-classifier


cd backend

python3 -m venv venv

source venv/bin/activate

pip install -r requirements.txt

python train_model.py  # untuk melatih dan menyimpan model

flask run

cd ../frontend

npm install
npm run dev
```


