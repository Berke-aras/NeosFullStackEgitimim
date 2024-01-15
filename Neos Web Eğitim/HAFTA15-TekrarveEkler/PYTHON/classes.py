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