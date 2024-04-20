from flask import Flask,request,render_template

app = Flask(__name__)

@app.route("/")
def home():
    if request.method == "POST":
        pass
        return render_template("index.html",javascript_file=None)
    return render_template("")

