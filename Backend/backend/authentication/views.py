from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated

from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework import status


# Create your views here.

class HomeView(APIView):
    permission_classes = (IsAuthenticated,)

    def get(self , request):
        resp = {
            "message":"Welcome to the django jwt authentication page "
        }

        return Response(resp)
    


class LogoutView(APIView):

    permission_classes = (IsAuthenticated , )

    def post(self , request):
        try:
            refresh_token = request.data['refresh_token']
            token = RefreshToken(refresh_token)
            token.blacklist()

            return Response(status = status.HTTP_205_RESET_CONTENT)

        except:
            return Response(status=status.HTTP_400_BAD_REQUEST)