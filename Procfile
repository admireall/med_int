web: gunicorn internship.wsgi:application --timeout 60 --keep-alive 5 --log-level debug
worker: celery -A internship worker --loglevel=info 