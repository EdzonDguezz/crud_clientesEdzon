from django.db import models
import os

# Create your models here.
class Cliente(models.Model):
    nombre = models.CharField(max_length=100)
    apellidos = models.CharField(max_length=100)
    fecha_nac = models.DateField()
    foto = models.ImageField(upload_to='clientes_fotos', blank=True, null=True)

    def __str__(self):
        return f"{self.nombre} {self.apellidos}"

    def delete(self, *args, **kwargs):
        if self.foto:                                                          #si el objeto tiene una foto
            if os.path.isfile(self.foto.path):                                  #si es un archivo
                os.remove(self.foto.path)                                        #borralo
        super().delete(*args, **kwargs)            #super invoca al constructor del padre y antes de borrar borra la foto