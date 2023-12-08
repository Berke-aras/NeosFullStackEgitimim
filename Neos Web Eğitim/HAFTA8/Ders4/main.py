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

print("\n\n\n\n")

#miras

class Kitap():
    def __init__(self, sayfa_sayisi, yazar, kitap_ismi, basım_tarihi, yayinevi, fiyat):
        self.sayfa_sayisi = sayfa_sayisi
        self.yazar = yazar
        self.kitap_ismi = kitap_ismi
        self.basim_tarihi = basım_tarihi
        self.yayinei = yayinevi
        self.fiyat = fiyat
        
        print("nesne Başarıyla oluşturuldu")
    
    def __len__(self):
        return self.sayfa_sayisi
    
    def __str__(self):
        return f'Kitap Adı: {self.kitap_ismi}'

kitap_1 = Kitap(351, "J.K. Roeling", "Lord Of The Rings", 1985, "Universal", "30$")
print(len(kitap_1))
print(kitap_1)

print("")

class Roman(Kitap):
    def __init__(self, sayfa_sayisi, yazar, kitap_ismi, basım_tarihi, yayinevi, fiyat, kategori):
        super().__init__(sayfa_sayisi, yazar, kitap_ismi, basım_tarihi, yayinevi, fiyat)
        self.kategori = kategori

    def __str__(self):
        return f'YazarAdı: {self.kategori}\nKitap Adı: {self.kitap_ismi}'

kitap_2 = Roman(359, "Dan Brown", "Cehennem", 2011, "Universal", "15$", "Polisiye")
print(len(kitap_2))
print(kitap_2)