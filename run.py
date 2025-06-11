from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def login():
    return render_template('login.html')

@app.route('/overview')
def overview():
    return render_template('overview.html')

@app.route('/dashboard')
def dashboard():
    return render_template('dashboard.html')

@app.route('/profile')
def profile():
    return render_template('profile.html')

@app.route('/leaderboard')
def leaderboard():
    return render_template('leaderboard.html')

@app.route('/material')
def material():
    return render_template('material.html')

@app.route('/discussion')
def discussion():
    return render_template('discussion.html')

@app.route('/quiz')
def quiz():
    return render_template('quiz.html')

@app.route('/debate')
def debate():
    return render_template('debate.html')

@app.route('/completion')
def completion():
    return render_template('completion.html')

if __name__ == '__main__':
    app.run(debug=True)
