from flask import Flask,request,render_template

app = Flask(__name__)

@app.route("/",methods=["POST","GET"])
def home():
    if request.method == "POST":
        javascript_file = request.form.get("javascript_file")
        return render_template("index.html",javascript_file=javascript_file)
    return render_template("form.html")

if __name__ == "__main__":
    app.run(debug=True,host="0.0.0.0")