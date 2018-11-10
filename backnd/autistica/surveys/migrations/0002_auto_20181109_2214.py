# Generated by Django 2.1.3 on 2018-11-09 22:14

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('surveys', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Response',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('rtype', models.CharField(max_length=20)),
                ('choice_text', models.CharField(max_length=200)),
            ],
        ),
        migrations.RemoveField(
            model_name='choice',
            name='question',
        ),
        migrations.RenameField(
            model_name='question',
            old_name='question_category',
            new_name='category',
        ),
        migrations.AddField(
            model_name='question',
            name='qtype',
            field=models.CharField(default='open_text', max_length=20),
        ),
        migrations.DeleteModel(
            name='Choice',
        ),
        migrations.AddField(
            model_name='response',
            name='question',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='surveys.Question'),
        ),
    ]