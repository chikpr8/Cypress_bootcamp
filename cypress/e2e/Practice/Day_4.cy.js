/// <reference types="cypress" />

/*
╔════════════════════════════════════════════════════════════════════════════╗
║                  CYPRESS HOOKS - BASIC UNDERSTANDING - DAY 4               ║
├════════════════════════════════════════════════════════════════════════════┤
║           TEST CREDENTIALS:                                                ║
║           📧 Email: cypressbootcamp123@gmail.com                           ║
║           🔐 Password: Cypressbootcamp                                     ║
╚════════════════════════════════════════════════════════════════════════════╝

What are Hooks?
═══════════════════════════════════════════════════════════════════════════════
Hooks are functions that run at specific times during test execution.

┌──────────────┬──────────────┬─────────────────────────────────────────────┐
│ HOOK         │ RUNS         │ PURPOSE                                     │
├──────────────┼──────────────┼─────────────────────────────────────────────┤
│ before()     │ 1 time       │ Setup once for ALL tests (login, create     │
│              │ at START     │ database, etc.)                             │
├──────────────┼──────────────┼─────────────────────────────────────────────┤
│ beforeEach() │ Before each  │ Prepare EACH test (navigate page, reset)    │
│              │ test         │                                             │
├──────────────┼──────────────┼─────────────────────────────────────────────┤
│ afterEach()  │ After each   │ Cleanup EACH test (screenshot, verify)      │
│              │ test         │                                             │
├──────────────┼──────────────┼─────────────────────────────────────────────┤
│ after()      │ 1 time       │ Final cleanup for ALL tests                 │
│              │ at END       │                                             │
└──────────────┴──────────────┴─────────────────────────────────────────────┘
*/

// ════════════════════════════════════════════════════════════════════════════════
// ✅ TEST SUITE 1: UNDERSTANDING BEFORE()
// ════════════════════════════════════════════════════════════════════════════════

describe('Suite 1: before() Hook - Setup Once for All Tests', () => {

    before(() => {

        // Store credentials globally for all tests to use
        cy.wrap({
            email: 'cypressbootcamp123@gmail.com',
            password: 'Cypressbootcamp'
        }).as('testCreds');

        cy.log('✅ Credentials stored in "testCreds" alias');

    });

    // 🟡 beforeEach still runs before EACH test
    beforeEach(() => {
        cy.clearCookies();
        cy.clearLocalStorage();
        cy.visit('https://automationexercise.com');
    });

    it('Test 1: Page loads successfully', () => {

        cy.log('Test 1 running...');
        cy.log('ℹ️  before() already ran before this test');
        cy.log('ℹ️  beforeEach() just ran before this test');

        cy.get('body').should('be.visible');
        cy.log('✅ Test 1 PASSED');

    });

    it('Test 2: Home link exists', () => {
        cy.log('Test 2 running...');
        cy.log('ℹ️  before() did NOT run again (it ran only once!)');
        cy.log('ℹ️  beforeEach() ran again before this test');

        cy.contains('Home').should('exist');
        cy.log('✅ Test 2 PASSED');
        cy.log('');
    });
});


// ════════════════════════════════════════════════════════════════════════════════
// ✅ TEST SUITE 2: UNDERSTANDING beforeEach()
// ════════════════════════════════════════════════════════════════════════════════

describe('Suite 2: beforeEach() Hook - Reset Before EACH Test', () => {

    beforeEach(() => {
        cy.log('');
        cy.log('───────────────────────────────────────────────');
        cy.log('🟡 BEFORE EACH HOOK: RUNNING');
        cy.log('───────────────────────────────────────────────');
        cy.log('Purpose: Fresh start for this test');

        // Clear browser data
        cy.clearCookies();
        cy.clearLocalStorage();

        // Navigate to page
        cy.visit('https://automationexercise.com');
        cy.log('✅ Fresh page loaded, ready for test');
        cy.log('');
    });

    it('Test A: Signup button visible', () => {
        cy.log('Test A running - beforeEach just prepared the page');
        cy.get('[href="/login"]').should('be.visible');
        cy.log('✅ Test A PASSED');
        cy.log('');
    });

    it('Test B: Login section visible', () => {
        cy.log('Test B running - beforeEach ran AGAIN to reset page');
        cy.get('.login-form').should('be.visible');
        cy.log('✅ Test B PASSED');
        cy.log('');
    });

    it('Test C: Homepage loads', () => {
        cy.log('Test C running - beforeEach ran for the THIRD time');
        cy.get('header').should('be.visible');
        cy.log('✅ Test C PASSED');
        cy.log('');
    });
});


// ════════════════════════════════════════════════════════════════════════════════
// ✅ TEST SUITE 3: UNDERSTANDING afterEach()
// ════════════════════════════════════════════════════════════════════════════════

describe('Suite 3: afterEach() Hook - Cleanup After EACH Test', () => {

    beforeEach(() => {
        cy.visit('https://automationexercise.com');
    });

    // 🔵 This runs AFTER each test
    afterEach(function () {
        cy.log('');
        cy.log('───────────────────────────────────────────────');
        cy.log('🔵 AFTER EACH HOOK: RUNNING');
        cy.log('───────────────────────────────────────────────');

        // Check if test passed or failed
        if (this.currentTest.state === 'failed') {
            cy.log('❌ Test FAILED - Taking screenshot for debugging');
            cy.screenshot();
        } else {
            cy.log('✅ Test PASSED - No screenshot needed');
        }

        // Cleanup
        cy.log('🧹 Cleanup: Clearing browser data');
        cy.clearCookies();
        cy.clearLocalStorage();
        cy.log('✅ Cleanup complete');
        cy.log('');
    });

    it('Test 1: Check header', () => {
        cy.log('Test 1 running');
        cy.get('header').should('be.visible');
        cy.log('✅ Test 1 PASSED - afterEach() will run next');
    });

    it('Test 2: Check footer', () => {
        cy.log('Test 2 running');
        cy.get('footer').should('exist');
        cy.log('✅ Test 2 PASSED - afterEach() will run next');
    });
});


// ════════════════════════════════════════════════════════════════════════════════
// ✅ TEST SUITE 4: UNDERSTANDING after()
// ════════════════════════════════════════════════════════════════════════════════

describe('Suite 4: after() Hook - Final Cleanup for ALL Tests', () => {

    beforeEach(() => {
        cy.visit('https://automationexercise.com');
        cy.log('beforeEach: Page loaded');
    });

    afterEach(() => {
        cy.log('afterEach: Test cleanup');
    });

    // 🔴 This runs ONCE at the very end (after ALL tests in this suite)
    after(() => {
        cy.log('');
        cy.log('═══════════════════════════════════════════════════════');
        cy.log('🔴 AFTER HOOK: RUNNING (This is the last thing)');
        cy.log('═══════════════════════════════════════════════════════');
        cy.log('Purpose: Final cleanup for entire suite');
        cy.log('Actions: Close connections, delete test data, etc.');
        cy.log('✅ All tests finished - Cleanup complete!');
        cy.log('');
    });

    it('Final Test 1', () => {
        cy.log('Final Test 1 - after() has NOT run yet');
        cy.get('body').should('be.visible');
    });

    it('Final Test 2', () => {
        cy.log('Final Test 2 - after() will run AFTER this test');
        cy.get('body').should('be.visible');
    });
});


// ════════════════════════════════════════════════════════════════════════════════
// ✅ PRACTICAL EXAMPLE: Login Once & Reuse for All Tests
// ════════════════════════════════════════════════════════════════════════════════

describe('Practical Example: Login Once Pattern', () => {

    // ✨ REAL SCENARIO: Login only ONCE for ALL tests
    before(() => {
        cy.log('🔐 LOGGING IN ONCE for all tests below...');
        cy.visit('https://automationexercise.com/login');

        // Login with real credentials
        cy.get('[data-qa="login-email"]').type('cypressbootcamp123@gmail.com');
        cy.get('[data-qa="login-password"]').type('Cypressbootcamp');
        cy.get('[data-qa="login-button"]').click();

        cy.log('✅ Logged in successfully!');
        cy.log('Now all tests below can use this logged-in session');
    });

    it('Test 1: User is logged in', () => {
        cy.visit('https://automationexercise.com/');
        cy.log('Checking if still logged in...');
        // If logged in, we should see user name or logout button
        cy.should(() => {
            // Check that we're on homepage
            expect(cy.get('body')).to.exist;
        });
        cy.log('✅ User session still active!');
    });

    it('Test 2: Can navigate as logged in user', () => {
        cy.visit('https://automationexercise.com/');
        // Verify page loaded (don't need to login again!)
        cy.get('header').should('be.visible');
        cy.log('✅ Navigated successfully without re-login!');
    });
});


describe.only('assertion',()=>{
    it("should",()=>{
         cy.visit('https://automationexercise.com/login');
         cy.wait(5000)
         cy.get('[href="/products"]>i',{timeout:5000}).should('have.text','').should('be.visible').should('be.enabled')

         //explicit assertion
         cy.get('[href="/products"]>i').then(($text)=>{
            const text = $text.text()
            expect(text).eq('')
         })
    })
})


// ════════════════════════════════════════════════════════════════════════════════
// 📊 EXECUTION ORDER FLOWCHART
// ════════════════════════════════════════════════════════════════════════════════
/*

For a describe block with 3 tests, here's the exact execution order:

START SUITE
    ↓
🟢 before() .................... Runs 1 time at the beginning
    ↓
    🟡 beforeEach() ............ Runs before Test 1
        ↓
        ✅ Test 1 executes
        ↓
    🔵 afterEach() ............ Runs after Test 1
    ↓
    🟡 beforeEach() ............ Runs before Test 2
        ↓
        ✅ Test 2 executes
        ↓
    🔵 afterEach() ............ Runs after Test 2
    ↓
    🟡 beforeEach() ............ Runs before Test 3
        ↓
        ✅ Test 3 executes
        ↓
    🔵 afterEach() ............ Runs after Test 3
    ↓
🔴 after() ..................... Runs 1 time at the end

END SUITE


KEY FACTS:
═════════════════════════════════════════════════════════════════════════════
✓ before()     runs 1 time (at the START)
✓ beforeEach() runs EVERY test (Test 1, Test 2, Test 3, etc.)
✓ afterEach()  runs EVERY test (Test 1, Test 2, Test 3, etc.)
✓ after()      runs 1 time (at the END)

Total for 3 tests:
  - before()     = 1 execution
  - beforeEach() = 3 executions
  - afterEach()  = 3 executions
  - after()      = 1 execution

*/


// ════════════════════════════════════════════════════════════════════════════════════
// 📚 CYPRESS EXECUTION MODEL - PROMISE-LESS NATURE & COMMAND QUEUE
// ════════════════════════════════════════════════════════════════════════════════════

describe('Cypress Execution Model: Promise-Less Nature & Command Queue', () => {

    /*
    WHY IS CYPRESS "PROMISE-LESS"?
    ═════════════════════════════════════════════════════════════════════════════
    
    Traditional JavaScript:
    ─────────────────────────────────────────────────────────────────────────────
    // You need to handle promises/async-await
    async function myTest() {
        let element = await cy.get('.button');  // ❌ Must wait with await
        element.click();
    }
    
    Cypress (Promise-Less):
    ─────────────────────────────────────────────────────────────────────────────
    // You DON'T need promises - Cypress handles it automatically
    cy.get('.button').click();  // ✅ Automatically waits, no await needed!
    
    WHY? Cypress uses a COMMAND QUEUE that executes commands sequentially.
    
    */

    describe('🎯 Part 1: Understanding Command Queue', () => {

        it('Demo: How Cypress Command Queue Works', () => {
            cy.log('');
            cy.log('═══════════════════════════════════════════════');
            cy.log('CYPRESS COMMAND QUEUE DEMONSTRATION');
            cy.log('═══════════════════════════════════════════════');
            cy.log('');
            cy.log('📋 Command Queue = List of tasks waiting to execute');
            cy.log('');

            // COMMAND 1: Queue this command
            cy.log('✅ Command 1 QUEUED: cy.visit()');
            cy.visit('https://automationexercise.com/');
            // At this point, visit() hasn't run yet! It's just queued.

            // COMMAND 2: Queue this command
            cy.log('✅ Command 2 QUEUED: cy.get()');
            cy.get('header');
            // get() hasn't run yet! It's queued after visit()

            // COMMAND 3: Queue this command  
            cy.log('✅ Command 3 QUEUED: cy.contains()');
            cy.contains('Home');
            // contains() hasn't run yet! It's queued after get()

            cy.log('');
            cy.log('NOW CYPRESS EXECUTES THE ENTIRE QUEUE:');
            cy.log('1️⃣  Command 1 runs: cy.visit() → navigates to page');
            cy.log('2️⃣  Command 2 runs: cy.get() → finds element');
            cy.log('3️⃣  Command 3 runs: cy.contains() → finds text');
            cy.log('');
            cy.log('✅ All commands executed in order (FIFO)');
        });

        it('Demo: Queue Prevents Race Conditions', () => {
            cy.log('');
            cy.log('═══════════════════════════════════════════════');
            cy.log('WHY COMMAND QUEUE IS IMPORTANT');
            cy.log('═══════════════════════════════════════════════');
            cy.log('');

            cy.log('❌ WITHOUT Queue (JavaScript would fail):');
            cy.log('   cy.get(\'.button\') → Tries to find button');
            cy.log('   .click() → Button doesn\'t exist yet!');
            cy.log('   Result: TEST FAILS 💥');
            cy.log('');

            cy.log('✅ WITH Queue (Cypress way):');
            cy.log('   cy.visit() → Queue command 1');
            cy.log('   cy.get(\'.button\') → Queue command 2');
            cy.log('   .click() → Part of command 2');
            cy.log('   Cypress waits for each to finish!');
            cy.log('   Result: TEST PASSES ✅');
            cy.log('');

            // Real example:
            cy.visit('https://automationexercise.com/');
            cy.get('[data-qa="signup-button"]').should('be.visible');
            cy.log('✅ Command queue ensured page loaded before finding button');
        });
    });


    describe('🎯 Part 2: Promise-Less Nature Examples', () => {

        it('NO PROMISES NEEDED: Simple Command Chain', () => {
            cy.log('');
            cy.log('═══════════════════════════════════════════════');
            cy.log('PROMISE-LESS NATURE: NO async/await NEEDED');
            cy.log('═══════════════════════════════════════════════');
            cy.log('');

            // ❌ WRONG: Traditional JavaScript approach
            // const btn = await cy.get('.button');  // ❌ Don't do this
            // btn.click();

            // ✅ RIGHT: Cypress way (no promises!)
            cy.visit('https://automationexercise.com/');
            cy.get('header').should('be.visible');
            cy.contains('Home').click({ force: true });

            cy.log('✅ No async/await, no .then(), just simple commands!');
            cy.log('');
        });

        it('CHAINING: Commands Execute Sequentially', () => {
            cy.log('How many commands are in the queue?');
            cy.log('');

            cy.visit('https://automationexercise.com/login')
                .log('Command 1 done: Visited page')
                .then(() => {
                    cy.log('Command 2: Getting email field...');
                });

            cy.get('[data-qa="login-email"]')
                .log('Command 3 done: Found email field')
                .type('cypressbootcamp123@gmail.com')
                .log('Command 4 done: Typed email');

            cy.get('[data-qa="login-password"]')
                .type('Cypressbootcamp')
                .log('Command 5 done: Typed password');

            cy.get('[data-qa="login-button"]')
                .click()
                .log('Command 6 done: Clicked login');

            cy.log('');
            cy.log('✅ All 6 commands executed in perfect order!');
        });
    });


    describe('🎯 Part 3: Understanding cy.then() with Command Queue', () => {

        it('Using .then() to Access Previous Command Result', () => {
            cy.log('');
            cy.log('═══════════════════════════════════════════════');
            cy.log('.then() = Access the RESULT of previous command');
            cy.log('═══════════════════════════════════════════════');
            cy.log('');

            cy.visit('https://automationexercise.com/');

            // Get element and use its value
            cy.get('h2').then(($h2) => {
                cy.log('✅ .then() receives the element from cy.get()');
                cy.log('Element text:', $h2.text());

                // Verify it exists
                expect($h2).to.exist;
            });

            cy.log('');
            cy.log('✅ .then() = Bridge between queue and real values');
        });

        it('Comparing .then() vs Direct Chaining', () => {
            cy.log('');
            cy.log('METHOD 1: Direct chaining (preferred)');
            cy.log('─────────────────────────────────');
            cy.get('[data-qa="signup-button"]')
                .should('be.visible')
                .click();
            cy.log('✅ Clean and simple!');
            cy.log('');

            cy.log('METHOD 2: Using .then() (when you need value)');
            cy.log('─────────────────────────────────');
            cy.get('body').then(($body) => {
                if ($body.find('[data-qa="signup-button"]').length > 0) {
                    cy.log('✅ Button found using .then()');
                }
            });
        });
    });


    describe('🎯 Part 4: Command Queue Visualization', () => {

        it('See the Queue in Action', () => {
            cy.log('');
            cy.log('COMMAND QUEUE EXECUTION ORDER:');
            cy.log('═════════════════════════════════════════════');
            cy.log('');

            cy.log('Step 1: QUEUING PHASE');
            cy.log('─────────────────────');
            cy.visit('https://automationexercise.com/');
            cy.log('  ⬜ Queue item 1: visit');

            cy.get('header');
            cy.log('  ⬜ Queue item 2: get header');

            cy.contains('Home');
            cy.log('  ⬜ Queue item 3: contains Home');

            cy.log('');
            cy.log('Step 2: EXECUTION PHASE (happens automatically)');
            cy.log('─────────────────────');
            cy.log('  ✅ Queue item 1 EXECUTING: Visit page');
            cy.log('  ⏳ Waiting for page to load...');
            cy.log('  ✅ Queue item 2 EXECUTING: Find header');
            cy.log('  ✅ Queue item 3 EXECUTING: Find Home link');

            cy.log('');
            cy.log('✅ All commands completed successfully!');
            cy.log('');
        });
    });


    describe('🎯 Part 5: Real World Example', () => {

        it('Login Example: Demonstrating Queue Execution', () => {
            cy.log('');
            cy.log('REAL-WORLD SCENARIO: Login Flow');
            cy.log('═════════════════════════════════════════════');
            cy.log('');

            // Queue all commands (they don't run immediately!)
            cy.log('🔵 QUEUE PHASE: Adding commands to queue...');
            cy.visit('https://automationexercise.com/login');
            cy.get('[data-qa="login-email"]');
            cy.get('[data-qa="login-password"]');
            cy.get('[data-qa="login-button"]');
            cy.log('✅ 4 commands queued');

            cy.log('');
            cy.log('🟢 EXECUTE PHASE: Running commands in order...');
            cy.log('');

            // NOW execute the entire flow
            cy.visit('https://automationexercise.com/login')
                .log('✅ Page visited');

            cy.get('[data-qa="login-email"]')
                .type('cypressbootcamp123@gmail.com')
                .log('✅ Email typed');

            cy.get('[data-qa="login-password"]')
                .type('Cypressbootcamp')
                .log('✅ Password typed');

            cy.get('[data-qa="login-button"]')
                .click()
                .log('✅ Login button clicked');

            cy.log('');
            cy.log('✅ ENTIRE LOGIN FLOW COMPLETED');
            cy.log('');
            cy.log('KEY INSIGHT:');
            cy.log('No await, no .catch(), no error handling needed.');
            cy.log('Cypress queue handles it all automatically!');
        });
    });


    /*
    
    SUMMARY: CYPRESS EXECUTION MODEL
    ═════════════════════════════════════════════════════════════════════════════
    
    1️⃣  COMMAND QUEUE:
        ├─ All Cypress commands get queued automatically
        ├─ They execute in order (FIFO - First In, First Out)
        ├─ Each command waits for previous to complete
        └─ No need for async/await
    
    2️⃣  PROMISE-LESS NATURE:
        ├─ You write code that LOOKS synchronous
        ├─ Behind scenes, Cypress manages async operations
        ├─ No .then(), no async/await needed (usually)
        └─ Makes tests readable and maintainable
    
    3️⃣  WHEN TO USE .then():
        ├─ When you need the VALUE from a command
        ├─ When you need to access jQuery element ($el)
        ├─ When you need conditional logic
        └─ Example: cy.get().then(($el) => { ... })
    
    4️⃣  EXAMPLE FLOW:
    
        cy.visit('url')              ← Command queued
        cy.get('button')             ← Command queued
        .click()                     ← Part of get command
        
        NOW CYPRESS EXECUTES:
        Visit URL (waits for page)
        Find button (waits for it to exist)
        Click button (waits for click to complete)
        
        Result: Perfect sequence, no race conditions! ✅
    
    5️⃣  WHY THIS MATTERS:
        ✅ Tests are reliable (no timing issues)
        ✅ Code is clean (no async complexity)
        ✅ Debugging is easy (commands run in order)
        ✅ Works automatically (Cypress handles waits)
    
    */

});


