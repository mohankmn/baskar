# Generated by Django 3.1.6 on 2021-03-13 06:51

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('goods', '0002_auto_20210313_1218'),
    ]

    operations = [
        migrations.RenameField(
            model_name='amount',
            old_name='prod',
            new_name='raw_material',
        ),
        migrations.RenameField(
            model_name='amount',
            old_name='amount_req',
            new_name='required_amount',
        ),
    ]
