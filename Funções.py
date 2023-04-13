{
  "nbformat": 4,
  "nbformat_minor": 0,
  "metadata": {
    "colab": {
      "provenance": [],
      "authorship_tag": "ABX9TyPa+LxHt/CoBdcAZgynExkZ"
    },
    "kernelspec": {
      "name": "python3",
      "display_name": "Python 3"
    },
    "language_info": {
      "name": "python"
    }
  },
  "cells": [
    {
      "cell_type": "code",
      "execution_count": 16,
      "metadata": {
        "colab": {
          "base_uri": "https://localhost:8080/"
        },
        "outputId": "c57f6997-d610-4fca-c4ae-7f0cd1f98759",
        "id": "biWzHHkJ0qYt"
      },
      "outputs": [
        {
          "output_type": "stream",
          "name": "stdout",
          "text": [
            "Início do programa\n",
            "Digite o seu nome: Dandara\n",
            "Digite sua idade: 17\n",
            "Olá! Dandara Você tem 17\n",
            "Digite o seu nome: Lorena\n",
            "Digite sua idade: 3\n",
            "Olá! Lorena Você tem 3\n",
            "Digite o seu nome: Hannah\n",
            "Digite sua idade: 15\n",
            "Olá! Hannah Você tem 15\n"
          ]
        }
      ],
      "source": [
        "def mensagem1():\n",
        "  print(\"Olá! \")\n",
        "\n",
        "def mensagem2(nome,idade):\n",
        "  print(\"Olá!\", nome, \"Você tem\", idade)\n",
        "\n",
        "def main():\n",
        "  print(\"Início do programa\")\n",
        "  i = 1\n",
        "  while i<=3:\n",
        "    Nm = str(input(\"Digite o seu nome: \"))\n",
        "    Idd = int(input(\"Digite sua idade: \"))\n",
        "    mensagem2(Nm, Idd)\n",
        "    i+=1\n",
        "main()"
      ]
    },
    {
      "cell_type": "code",
      "source": [
        "def mensagem1():\n",
        "  print(\"Olá! \")\n",
        "\n",
        "def mensagem2(nome,idade):\n",
        "  print(\"Olá!\", nome, \"Você tem\", idade)\n",
        "\n",
        "def mensagem3():\n",
        "  return Olá\n",
        "\n",
        "def mensagem3a():\n",
        "  return 2\n",
        "def mensagem4(nome):\n",
        "  return \"Olá \" + nome + \"!\"\n",
        "\n",
        "def main():\n",
        "  m = mensagem4(\"Dandara\")\n",
        "  print(m)\n",
        "  print(mensagem4(\"Lorena\"))\n",
        "    \n",
        "main()"
      ],
      "metadata": {
        "colab": {
          "base_uri": "https://localhost:8080/"
        },
        "id": "4dKWmvwe2PVS",
        "outputId": "11f1527c-3804-4b19-800d-e53630b73ae4"
      },
      "execution_count": 18,
      "outputs": [
        {
          "output_type": "stream",
          "name": "stdout",
          "text": [
            "Olá Dandara!\n",
            "Olá Lorena!\n"
          ]
        }
      ]
    }
  ]
}