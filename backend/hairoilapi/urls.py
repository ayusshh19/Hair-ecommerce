from django.urls import path,include
from .views import home,registerUser,Purchase,Customeraddress,coupon
urlpatterns = [
    path('', home,name='home'),
    path('register/', registerUser,name='register'),
    path('purchase/', Purchase,name='Purchased products'),
    path('address/', Customeraddress,name='Customer address'),
    path('coupon/', coupon,name='User Coupon'),
    
]
