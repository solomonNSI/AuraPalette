# Generated by Django 4.0.8 on 2022-12-12 15:37

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('auth_api', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='uid',
            field=models.CharField(blank=True, max_length=120, null=True),
        ),
        migrations.AlterField(
            model_name='user',
            name='favPaletteIDs',
            field=models.JSONField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='user',
            name='histPaletteIDs',
            field=models.JSONField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='user',
            name='id',
            field=models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID'),
        ),
    ]