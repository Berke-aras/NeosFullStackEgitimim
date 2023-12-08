# class Book:
#     def print_text(self):
#         print(self)

#pascal case kullanmak daha iyi
class Car():
    def __init__(self, brand, model, hp, color, pin): #initilaze ( başlatılış) ik çalışan fonk
        self.brand = brand 
        self.model = model
        self.hp = hp
        self.color = color
        self.tire_count = 4
        self.pin = pin

    def __str__(self):
        return (f"""
        Brand: {self.brand}
        Model: {self.model}
        Hp: {self.hp}
        Color: {self.color}
        Tire Count: {self.tire_count}
                """)

    def aracıAC(self, pin):
        if self.pin == pin:
            print("Araç Çalıştı", self.brand)
        else:
            print("Kimlik Doğrulama Başarısız", self.brand)

car1 = Car("Mercedes", "G63", 1200, "Black", 1222)

# print(car1) # __main__.Car object at 0x000001EEAD29E390 init olmadan sonuç
print(car1.brand, car1.model, car1.tire_count) 
print(car1)

car2 = Car("Lamborgini", "Gallardo", 900, "Yellow", 1555)
print(car2)

car2.aracıAC(1555)
car1.aracıAC(456)



