from django.db import models
from django.contrib.auth.models import User
from django.contrib.auth.forms import UserCreationForm
# Create your models here.


class Kullanicilar(UserCreationForm):
    class Meta:
        model: User
        fields=["username","email","password1","password2"]
        def __init__(self, *args, **kwargs) -> None:
            super(Kullanicilar,self).__init__(*args, **kwargs)
            for name, field in self.fields.items():
                field.widget.attrs.update({"class":"form-control"})
            self.fields["username"].widget.attrs.update({"place-holder":"Kullanıcı Adı"})

