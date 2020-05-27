/**
 * Реализация
 * -----------
 */

interface Unit {
  getPersonCount();
}

class DevelopDepartment implements Unit {
  getPersonCount() {
    console.log(30);
  }
}

class SecurityDepartment implements Unit {
  getPersonCount() {
    console.log(100);
  }
}

// DevelopDepartment и SecurityDepartment связанны реализацией