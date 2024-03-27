from django.apps import AppConfig


class Csds393ProjectConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'CSDS393PROJECT'

class UserConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'users'

    def ready(self):
        import signals