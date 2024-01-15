class Araba():
    # hp=0
    # marka=""
    # model=""
    def __init__(self, hp, marka, model):
        self.hp = hp
        self.marka = marka
        self.model = model
    def bilgiYaz(self):
        print(f"marka: {self.marka}\nModel: {self.model}\nHP:{self.hp}")
    def __str__(self) :
        return "Hello Wolrd"


car = Araba(300, "Seat", "Leon")

print(type(car))

car.bilgiYaz()

car.hp = 200
car.model = "Astra"
car.marka = "Opel"

car.bilgiYaz()

print(car) # ram de tuttuğu adres


class Canli():
    # tur="Van"
    # cinsiyet="Dişi"
    def __init__(self, tur, cinsiyet):
        self.tur = tur
        self.cinsiyet = cinsiyet
        
    def bilgileriGoster(self):
        print(self.tur, self.cinsiyet)

class Kedi(Canli):
    renk=""
    yas=0
    def __init__(self, tur, cinsiyet, renk, yas):
        super().__init__(tur, cinsiyet)
        self.renk = renk
        self.yas = yas     
    def konus(self):
        print(f"Benim {self.yas} yaşında {self.renk} renk olan ve {self.tur} türünde {self.cinsiyet} olan  kedim var....")

cat = Kedi("siyam", "dişi", "siyah", 12)
cat.bilgileriGoster()
cat.konus()
cat.renk="Beyaz"
cat.yas = 3
cat.konus()