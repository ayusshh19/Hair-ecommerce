from django.urls import path,include
from .views import home,registerUser,Purchase
urlpatterns = [
    path('', home,name='home'),
    path('register/', registerUser,name='register'),
    path('purchase/', Purchase,name='Purchased products'),
    
    
]
