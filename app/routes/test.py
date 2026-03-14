from flask import Blueprint, render_template

test_page = Blueprint('simple_page', __name__,template_folder="templates")

@test_page.route('/ping')
def test():
    return render_template('index.html')