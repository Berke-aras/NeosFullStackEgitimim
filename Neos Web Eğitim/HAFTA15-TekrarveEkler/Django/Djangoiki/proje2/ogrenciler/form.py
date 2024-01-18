from collections.abc import Mapping
from typing import Any
from django.core.files.base import File
from django.db.models.base import Model
from django.forms import ModelForm
from django.forms.utils import ErrorList
from .models import Ogrenciler

class OgrenciForm(ModelForm):
    class Meta:
        model=Ogrenciler
        fields=["adSoyad", "hakkinda", "resim"]
        
    def __init__(self, *args, **kwargs):
        super(OgrenciForm, self).__init__(*args, **kwargs)
        for name,field in self.fields.items():
            field.widget.attrs.update({"class":"form-control"})