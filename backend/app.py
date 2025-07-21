from flask import Flask, request, jsonify
from flask_cors import CORS
import joblib
import os

app = Flask(__name__)
CORS(app)

pipeline_path = "model/pipeline.pkl"

if not os.path.exists(pipeline_path):
    raise FileNotFoundError("Pipeline belum dilatih. Jalankan train_model.py dulu.")

pipeline = joblib.load(pipeline_path)

@app.route("/", methods=["GET"])
def index():
    return jsonify({"message": "Medical Text Classifier API is running."})

@app.route("/predict", methods=["POST"])
def predict():
    data = request.get_json()
    if not data or "text" not in data:
        return jsonify({"error": "Tolong sertakan field 'text'"}), 400

    text = data["text"]
    prediction = pipeline.predict([text])
    return jsonify({"category": prediction[0]})

if __name__ == "__main__":
    app.run(debug=True)
