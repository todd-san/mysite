# Generated by Django 2.0.3 on 2018-03-12 01:12

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0003_auto_20180311_1854'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='banner',
            name='post',
        ),
        migrations.RenameField(
            model_name='post',
            old_name='subtitle',
            new_name='abstract',
        ),
        migrations.AddField(
            model_name='post',
            name='tags',
            field=models.CharField(default='', max_length=1000),
        ),
        migrations.DeleteModel(
            name='Banner',
        ),
    ]