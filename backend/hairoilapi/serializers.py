from rest_framework import serializers
from .models import Userregister,Usercoupon,Delivery,Productpurchase


class Registerserializer(serializers.ModelSerializer):
    class Meta:
        model=Userregister
        fields='__all__'
        
class Usercouponserializer(serializers.ModelSerializer):
    class Meta:
        model=Usercoupon
        fields='__all__'

class Deliveryserializer(serializers.ModelSerializer):
    class Meta:
        model=Delivery
        fields='__all__'

class Productpurchaseserializer(serializers.ModelSerializer):
    class Meta:
        model=Productpurchase
        fields='__all__'
