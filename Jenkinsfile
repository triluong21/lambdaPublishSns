import groovy.json.JsonSlurper
pipeline {
  agent any
  def singlyQuoted = 'Hello'
 
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
        def doubleQuoted = "Tri"
        echo "${singlyQuoted} ${doubleQuoted} ${LASTNAME}"
      }
    } 
  }
}