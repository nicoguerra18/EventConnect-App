# Generated by Django 5.0.4 on 2024-04-10 15:09

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('CSDS393PROJECT', '0008_alter_userprofile_profilename_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='comment',
            name='parent_response',
        ),
        migrations.AlterField(
            model_name='comment',
            name='discussion',
            field=models.ForeignKey(db_column='discussion', on_delete=django.db.models.deletion.CASCADE, to='CSDS393PROJECT.discussion', to_field='event'),
        ),
        migrations.AlterField(
            model_name='comment',
            name='timestamp',
            field=models.CharField(max_length=150),
        ),
        migrations.AlterField(
            model_name='discussion',
            name='event',
            field=models.OneToOneField(db_column='event', on_delete=django.db.models.deletion.CASCADE, to='CSDS393PROJECT.event', to_field='name'),
        ),
        migrations.AlterField(
            model_name='event',
            name='name',
            field=models.CharField(max_length=150, unique=True),
        ),
    ]
