# Cypress Bootcamp - AI Coding Instructions

## Project Overview
This is a **Cypress E2E testing bootcamp** project focused on learning automation testing patterns and Cypress framework fundamentals. Tests target `automationexercise.com` as the primary test application.

**Tech Stack:**
- Cypress v15.9.0 (E2E testing framework)
- JavaScript/Node.js
- Test files organized by learning days

## Directory Structure & Conventions

### Test Organization
- **`cypress/e2e/Practice/`** - Learning exercises organized by day
  - `Day_1.cy.js` - Locator fundamentals (CSS selectors, XPath, attributes, link text)
  - `Day_2.cy.js` - Chaining methods (`.eq()`, `.find()`, `.first()`, `.last()`, `.children()`, `.parent()`, `.parents()`, `.closest()`)
  - `Day_3.cy.js`, `Day_4.cy.js` - Additional exercises (check files for specific topics)

### Support & Fixtures
- **`cypress/support/commands.js`** - Custom command definitions (currently has template examples)
- **`cypress/support/e2e.js`** - Global setup/hooks
- **`cypress/fixtures/`** - Test data files (example.json populated, products.json empty - ready for addition)

### Configuration
- **`cypress.config.js`** - Main configuration (setupNodeEvents hook available for custom listeners)

## Testing Patterns & Conventions

### Describe/It Structure
```javascript
describe('Test Suite Name', () => {
  it('Test case description', () => {
    // Test implementation
  });
});
```

### Locator Strategy (Priority Order)
1. **CSS Selectors** - Tag, ID, class, attributes (`[data-qa="..."]`, `[action="..."]`)
2. **XPath** - Relative XPath for complex DOM traversal
3. **Custom Attributes** - Prefer `data-*` attributes when available
4. **Link Text** - Use `cy.contains()` for link/button text matching

### Common Chaining Methods
- `.eq(index)` - Select by position
- `.find()` - Search within elements
- `.first()`, `.last()` - Position shortcuts
- `.children()`, `.parent()`, `.parents()`, `.closest()` - DOM traversal
- Use comments to document which method is being demonstrated

## Development Workflow

### Running Tests
```bash
npx cypress open          # Interactive mode
npx cypress run           # Headless mode
npm test                  # Check package.json for script definition
```

### File Naming
- Test files: `Day_N.cy.js` (lowercase 'y', follows Cypress convention)
- Use `/// <reference types="cypress" />` at file start for TypeScript IntelliSense

## Key Patterns

### Test Structure
- Each day's file demonstrates specific Cypress features/patterns
- Commented-out code examples show alternative implementations for learning
- Single `describe` block per file (bootcamp learning style)
- Tests visit `https://automationexercise.com` (external test site)

### Fixture Usage
- Store test data in `cypress/fixtures/` JSON files
- Reference with `cy.fixture('filename')` in tests
- Example: `products.json` is empty - populate for Day_3+ exercises

### Custom Commands (Future)
When extending `cypress/support/commands.js`:
```javascript
// Parent command (independent)
Cypress.Commands.add('login', (email, password) => { ... });

// Child command (chains off cy.get())
Cypress.Commands.add('fillForm', { prevSubject: 'element' }, (subject, data) => { ... });
```

## Important Notes for AI Agents

- **Bootcamp Context** - This is educational/learning project; code may contain intentionally incomplete examples
- **External Dependency** - Tests rely on `automationexercise.com`; verify site availability
- **Fixture Data** - `products.json` exists but is empty; ready for test data additions
- **Document Learning** - Include comments explaining *why* specific Cypress methods are used
- **Cypress Versions** - Currently v15.9.0; reference official Cypress docs for that version
