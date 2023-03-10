from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .serializers import Registerserializer,Productpurchaseserializer,Deliveryserializer,Usercouponserializer
from .models import Userregister,Usercoupon
# Create your views here.

@api_view(['GET','POST'])
def home(request):
    return Response({'msg':'Welcome user to our ecommerce'},status=status.HTTP_200_OK)

@api_view(['GET','POST'])
def registerUser(request):
    if request.method=='GET':
        return Response({'msg':'Please register yourself'},status=status.HTTP_200_OK)
    
    if request.method=='POST':
        serializers=Registerserializer(data=request.data)
        if serializers.is_valid():
            serializers.save()
            request.session['username']=request.data['username']
            return Response({'msg':'You have registered successfully!!'},status=status.HTTP_200_OK)
        return Response({'msg':serializers.errors},status=status.HTTP_403_FORBIDDEN)

@api_view(['GET','POST'])
def Purchase(request):
    if request.method=='GET':
        return Response({'msg':'Please Select Products'},status=status.HTTP_200_OK)
    
    if request.method=='POST':
        serializers=Productpurchaseserializer(data=request.data)
        if serializers.is_valid():
            serializers.save()
            return Response({'msg':'Payment Successfull Thank you!!'},status=status.HTTP_200_OK)
        return Response({'msg':serializers.errors},status=status.HTTP_403_FORBIDDEN)

@api_view(['GET','POST'])
def Customeraddress(request):
    if request.method=='GET':
        return Response({'msg':'Please Enter Your address'},status=status.HTTP_200_OK)
    
    if request.method=='POST':
        serializers=Deliveryserializer(data=request.data)
        if serializers.is_valid():
            serializers.save()
            return Response({'msg':'Your address is saved!!'},status=status.HTTP_200_OK)
        return Response({'msg':serializers.errors},status=status.HTTP_403_FORBIDDEN)

@api_view(['GET','POST','PUT','PATCH'])
def coupon(request):
    if request.method=='GET':
        return Response({'msg':'Make others Purchase to get coupon'})
    
    if request.method=='POST':
        data=request.data
        uniqueid=data['unique_id']
        try:
           userobj= Userregister.objects.get(unique_id=uniqueid)
           data['userid']=userobj.id
           serializers=Usercouponserializer(data=request.data)
           if serializers.is_valid():
                my_object = Usercoupon.objects.filter(userid=userobj)
                my_object.no_of_coupon += 1
                my_object.save()
                return Response({'msg':'Hurray New Coupon!!'},status=status.HTTP_200_OK)
           return Response({'msg':serializers.errors},status=status.HTTP_403_FORBIDDEN)
        except:
          return Response({'msg':'SOMETHING WENT WRONG'},status=status.HTTP_403_FORBIDDEN)
        