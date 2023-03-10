from django.db import models
import uuid
# Create your models here.

def generate_uuid():
    return str(uuid.uuid4())

class Userregister(models.Model):
    username=models.CharField(max_length=100)
    email=models.EmailField()
    phonenumber=models.CharField(max_length=100)
    password=models.CharField(max_length=100)
    registertime=models.TimeField(auto_now_add=True)
    unique_id = models.UUIDField(default=generate_uuid, editable=False, unique=True)
    
class Usercoupon(models.Model):
    userid=models.ForeignKey(Userregister,on_delete=models.CASCADE)
    no_of_coupon=models.IntegerField(default=0)
    

    
class Productpurchase(models.Model):
    userid=models.ForeignKey(Userregister,on_delete=models.CASCADE)
    productprice=models.CharField(max_length=100)
    productname=models.CharField(max_length=100)
    purchasetime=models.TimeField(auto_now_add=True)
    paymentcompletion=models.BooleanField(default=False)
    
class Delivery(models.Model):
    prodid=models.ForeignKey(Productpurchase,on_delete=models.CASCADE)
    city=models.CharField(max_length=100)
    state=models.CharField(max_length=100)
    address=models.CharField(max_length=1000)
    landmark=models.CharField(max_length=100)
    pincode=models.CharField(max_length=100)
    
    