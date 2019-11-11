import groovy.json.JsonSlurper
pipeline {
  def singlyQuoted = 'Hello'
  def doubleQuoted = "Tri"
  agent any
  environment {
    LASTNAME = 'Luong'
  }
  stages {
    stage('Checkout') {
      steps {
        checkout scm
        echo "checkout scm"
      }
    }
    stage('Display name') {
      steps {
        echo "${singlyQuoted} ${doubleQuoted} ${LASTNAME}"
      }
    } 
  }
}