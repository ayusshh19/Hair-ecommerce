from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .serializers import Registerserializer,Productpurchaseserializer,Deliveryserializer,Usercouponserializer
from .models import Userregister,Usercoupon,Productpurchase,Delivery
# Create your views here.

@api_view(['GET','POST'])
def home(request):
    return Response({'msg':'Welcome user to our ecommerce'},status=status.HTTP_200_OK)

@api_view(['GET','POST'])        
def loginuser(request):
    if request.method=='GET':
        return Response({'msg':'Welcome user login to proceed!!'},status=status.HTTP_200_OK)
    
    if request.method=='POST':
        username=request.data['username']
        password=request.data['password']
        try:
          userexist=Userregister.objects.filter(username=username,password=password)
          if userexist.exists():
              request.session['username']=username
              Userregister.save()
              userserial=Registerserializer(userexist,many=True)
              return Response({'msg':'successfully logged in!!','user':userserial.data},status=status.HTTP_200_OK)
          return Response({'msg':'Pls register yourself before login!!'},status=status.HTTP_404_NOT_FOUND)
        except :
          return Response({'msg':'Something went wrong!!'},status=status.HTTP_404_NOT_FOUND)
    
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
           my_object = Usercoupon.objects.update_or_create(id=data['userid'],defaults=data)
           my_object.no_of_coupon += 1
           my_object.save()
                # return Response({'msg':'Hurray New Coupon!!'},status=status.HTTP_200_OK)
           return Response({'msg':'Hurray New Coupon!!'},status=status.HTTP_403_FORBIDDEN)
        except:
          return Response({'msg':'SOMETHING WENT WRONG'},status=status.HTTP_403_FORBIDDEN)
        #    serializers=Usercouponserializer(data=request.data)
        #    if serializers.is_valid():
        #         serializers.save()
@api_view(['GET','POST'])        
def adminpanel(request):
    if request.method=='GET':
            try:
              userobj=Userregister.objects.all()
              cartproducts=Productpurchase.objects.all()
              getaddress=Delivery.objects.all()
              userserializer=Registerserializer(userobj,many=True)
              productserializer=Productpurchaseserializer(cartproducts,many=True)
              addresserializer=Deliveryserializer(getaddress,many=True)
              return Response({'userlist':userserializer.data,'productlist':productserializer.data,'addresslist':addresserializer.data},status=status.HTTP_200_OK)
            except:
              return Response({'msg':'something went wrong!!!'},status=status.HTTP_200_OK)
    return Response({'msg':'something went wrong!!!'},status=status.HTTP_200_OK)

@api_view(['GET','POST'])
def purchasecompletion(request):
    if request.method=='GET':
        return Response({'msg':'Complete product purchase'},status=status.HTTP_200_OK)
    
    if request.method=='POST':
        username=request.data['username']
        userobj=Userregister.objects.filter(username=username)
        product=Productpurchase.objects.filter(userid=userobj).update(paymentcompletion=True)
        productserializer=Productpurchaseserializer(product,many=True)
        return Response({'msg':productserializer.data},status=status.HTTP_200_OK)

@api_view(['GET','POST'])
def returnpayment(request):
    if request.method=='GET':
        return Response({'msg':'Pay return payment'},status=status.HTTP_200_OK)
    
    if request.method=='POST':
        username=request.data['username']
        userobj=Userregister.objects.filter(username=username)
        product=Productpurchase.objects.filter(userid=userobj).update(sellerstatus=True)
        productserializer=Productpurchaseserializer(product,many=True)
        return Response({'msg':productserializer.data},status=status.HTTP_200_OK)