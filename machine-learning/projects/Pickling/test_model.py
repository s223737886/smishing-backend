import joblib

# Load the saved model and vectorizer
model = joblib.load("rf_model.joblib")
vectorizer = joblib.load("vectorizer.joblib")

# Sample test messages
test_messages = [
    "Your package is on hold. Click here to reschedule delivery: http://fake-link.com",
    "Hi, just checking in. How was your day?",
    "URGENT: Your bank account is suspended. Verify now at secure-bank-login.com"
]

# Vectorize the messages
X_test = vectorizer.transform(test_messages)

# Predict using the model
predictions = model.predict(X_test)

# Show results
for msg, label in zip(test_messages, predictions):
    print(f"Message: {msg}")
    print(f"Prediction: {'Smishing' if label == 1 else 'Safe'}")
    print("-" * 50)

