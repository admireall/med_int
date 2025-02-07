# Healthcare Management System API

A Django REST API for managing healthcare records, appointments, and patient information.

## Features

- 👥 User Authentication with JWT
- 🏥 Patient Records Management
- 👨‍⚕️ Doctor Management
- 📅 Appointment Scheduling System
- 📧 Email Notifications using Celery
- 🔄 Appointment Rescheduling
- ❌ Appointment Cancellation

## Tech Stack

- Django 5.0.0
- Django REST Framework
- PostgreSQL
- Celery with Redis
- JWT Authentication
- CORS support
- Whitenoise for static files
- Gunicorn for deployment

## API Endpoints

### Authentication
- `POST /api/token/` - Obtain JWT token
- `POST /api/token/refresh/` - Refresh JWT token

### Patient Management
- `POST /api/create_user/` - Create new patient
- `GET /api/get_user/<id>/` - Get patient details
- `DELETE /api/delete_user/<id>/` - Delete patient

### Medical Records
- `POST /api/create_record/` - Create medical record
- `GET /api/get_record/<id>/` - Get medical record
- `PUT /api/update_record/<id>/` - Update medical record
- `DELETE /api/delete/<id>/` - Delete medical record

### Doctor Management
- `POST /api/create_doctor/` - Add new doctor
- `GET /api/get_doctor/` - Get all doctors

### Appointment Management
- `POST /api/create_appointment/` - Schedule new appointment
- `GET /api/get_appointment/<id>/` - Get appointment details
- `PUT /api/reschedule_appointment/<id>/` - Reschedule appointment
- `DELETE /api/cancel_appointment/<id>/` - Cancel appointment

## Setup and Installation

1. Clone the repository
 2. Create and activate virtual environment
3.Install dependencies
4. Set up environment variables
5. Run migrations
6 Create superuser
7. Start the development server

## Deployment

The application is configured for deployment with:
- Gunicorn as WSGI server
- Whitenoise for static files
- PostgreSQL as database
- Redis for Celery tasks

## Email Notifications

The system sends email notifications for:
- Appointment confirmation
- Appointment rescheduling
- Appointment cancellation

## Security Features

- JWT Authentication
- CORS configuration
- Secure password validation
- PostgreSQL with SSL mode

## License

This project is licensed under the MIT License - see the LICENSE file for details
## Contact

Your Name - =(mailto:nagothuanvesh@gmail.com)
