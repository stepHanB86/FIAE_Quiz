from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS
import openai
import os
from dotenv import load_dotenv


# Setze den API Key und die Base-URL direkt auf dem Modul
load_dotenv()
openai.api_key = os.getenv("OPENAI_API_KEY")

# Testaufruf zur Überprüfung der Konfiguration
try:
    response = openai.ChatCompletion.create(
        model="gpt-4o",
        messages=[
            {"role": "system", "content": "You are a helpful assistant"},
            {"role": "user", "content": "Hello"},
        ],
        stream=False
    )
    print("Testantwort:", response.choices[0].message.content)
except Exception as e:
    print("Fehler beim KI Testaufruf:", e)

app = Flask(__name__, static_folder="static", static_url_path="")
CORS(app)  # Erlaubt Cross-Origin Requests

@app.route("/")
def index():
    return send_from_directory("static", "index.html")

@app.route("/explain", methods=["POST"])
def explain():
    data = request.get_json()
    question = data.get("question")
    user_answer = data.get("user_answer")
    correct_answer = data.get("correct_answer")

    prompt = (
        f"Die Frage lautet: {question}\n"
        f"Der Benutzer hat geantwortet: {user_answer}\n"
        f"Die korrekte Antwort ist: {correct_answer}\n"
        "Du bist ein Lehrer und beantwortest und erklärst die Frage deinem Schüler oder deiner Schülerin möglichst kurz und präzise. Verwende dabei maximal 700 Zeichen. Am Ende weise noch kurz auf ein unter dem Text befindliches Tutorial hin."
    )

    try:
        response = openai.ChatCompletion.create(
            model="gpt-4o",
            messages=[
                {"role": "system", "content": "Du bist ein Lehrer und beantwortest und erklärst die Frage deinem Schüler oder deiner Schülerin möglichst kurz und präzise. Verwende dabei maximal 700 Zeichen. Am Ende weise noch kurz auf ein unter dem Text befindliches Tutorial hin."},
                {"role": "user", "content": prompt}
            ],
            temperature=0.7,
            max_tokens=150,
        )
        explanation = response.choices[0].message.content.strip()
        return jsonify({"explanation": explanation})
    except Exception as e:
        print("Fehler bei der KI Anfrage:", e)
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    app.run(host="0.0.0.0", port=port, debug=True)