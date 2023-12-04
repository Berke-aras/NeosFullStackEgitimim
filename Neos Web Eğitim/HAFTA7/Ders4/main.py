kullaniciAdi = input("kullanıcı adınızı giriniz: ") 
sifre = input("parolanızı giriniz: ") 

if kullaniciAdi == "admin" and sifre == "123":
     print("Giriş başarılı") 
else: 
     print("kullanıcı adı veya şifre yanlış")   