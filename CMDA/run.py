from app import app

if __name__ == '__main__':
  #app.run(host="0.0.0.0", port=app.config['PORT'], debug=True)
  #app.run(host="127.0.0.1", port=5000, debug=True)
  #app.run(host="0.0.0.0", port=8088, debug=True)
  app.run(host="0.0.0.0", port=8080, debug=True)
