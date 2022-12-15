import pyrebase
import environ

env = environ.Env()
environ.Env.read_env()
config={
    "apiKey": env("DATABASE_API_KEY"),
    "authDomain": env("AUTH_DOMAIN"),
    "databaseURL": env("DATABASE_URL"),
    "projectId": env("PROJECT_ID"),
    "storageBucket":  env("STORAGE_BUCKET"),
    "messagingSenderId": env("MESSAGING_SENDER_ID"),
    "appId": env("APP_ID")
}

class DatabaseAPI:
    firebase=pyrebase.initialize_app(config)
    auth = firebase.auth()
    db = firebase.database()
