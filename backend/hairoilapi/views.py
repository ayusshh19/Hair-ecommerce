from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .serializers import Registerserializer,Productpurchaseserializer
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