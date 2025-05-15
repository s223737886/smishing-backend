import pandas as pd
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import train_test_split
import joblib

# Load your dataset
df = pd.read_csv("C:/Users/kalpn/GitBash/smishing-backend/machine-learning/datasets/RewrittenSmishingMessages.csv")

# Convert 'label' to numeric (if not already done)
df["label"] = df["label"].apply(lambda x: 1 if str(x).lower().strip() == "smishing" else 0)

# Vectorize the 'rewritten' messages
vectorizer = TfidfVectorizer()
X = vectorizer.fit_transform(df["rewritten"])
y = df["label"]

# Split data (optional, if you want evaluation too)
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Train a Random Forest model
model = RandomForestClassifier(n_estimators=100, random_state=42)
model.fit(X_train, y_train)

# Save the model and vectorizer using joblib
joblib.dump(model, "rf_model_joblib.pkl")
joblib.dump(vectorizer, "rf_vectorizer_joblib.pkl")

print("✅ Model and vectorizer saved successfully using current sklearn version.")
