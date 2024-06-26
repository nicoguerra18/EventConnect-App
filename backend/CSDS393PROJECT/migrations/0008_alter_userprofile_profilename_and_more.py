# Generated by Django 5.0.4 on 2024-04-09 19:33

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('CSDS393PROJECT', '0007_alter_event_creator_alter_userprofile_username'),
    ]

    operations = [
        migrations.AlterField(
            model_name='userprofile',
            name='profileName',
            field=models.CharField(blank=True, max_length=100, null=True, unique=True),
        ),
        migrations.AlterField(
            model_name='userprofile',
            name='profilePicture',
            field=models.ImageField(blank=True, default='default.jpg', null=True, upload_to='profile_pics'),
        ),
        migrations.CreateModel(
            name='Discussion',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('body', models.TextField()),
                ('event', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to='CSDS393PROJECT.event')),
            ],
        ),
        migrations.CreateModel(
            name='Comment',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('body', models.CharField(max_length=300)),
                ('timestamp', models.DateTimeField(auto_now_add=True)),
                ('author', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='CSDS393PROJECT.userprofile', to_field='profileName')),
                ('parent_response', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='CSDS393PROJECT.comment')),
                ('discussion', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='CSDS393PROJECT.discussion')),
            ],
        ),
    ]
