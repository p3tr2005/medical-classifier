# 🩺 Medical Specialty Classifier

Web aplikasi berbasis Machine Learning yang dapat memprediksi **kategori spesialisasi medis** berdasarkan teks transkripsi atau deskripsi medis.

<img width="977" height="447" alt="chart_flow_ML" src="https://github.com/user-attachments/assets/acee3954-acbd-4e1f-b0d4-8c71a8b09d5f" />

<img width="1452" height="884" alt="1753966828_grim" src="https://github.com/user-attachments/assets/1507378c-e462-4a2f-92c6-8116a8d7529c" />

---

## 📌 Fitur Utama

- 🧠 **Prediksi Kategori Medis**: Menentukan spesialisasi medis seperti *Cardiology*, *Radiology*, *Surgery*, dll. berdasarkan teks input.
- ⚙️ **Machine Learning**: Menggunakan model TF-IDF + Naive Bayes yang dilatih dari dataset *MTSamples*.
- 🌐 **Frontend**: Dibangun dengan Next.js untuk UI .
- 🔥 **Backend API**: Menggunakan Flask untuk menangani prediksi berbasis model ML.

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
git clone https://github.com/p3tr2005/medical-classifier

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


