# Generated by Django 4.1 on 2023-03-10 19:47

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('hairoilapi', '0003_productpurchase_paymentcompletion'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='usercoupon',
            name='reference',
        ),
    ]
