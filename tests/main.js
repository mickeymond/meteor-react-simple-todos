import assert from "assert";
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// Configure enzyme to work with React
configure({ adapter: new Adapter() });

// Import client tests
import '../imports/ui/App.test';
import '../imports/ui/Task.test';

// Import server tests
import '../imports/api/tasks.test';


// Default Tests
describe("simple-todos", function () {
  it("package.json has correct name", async function () {
    const { name } = await import("../package.json");
    assert.strictEqual(name, "simple-todos");
  });

  if (Meteor.isClient) {
    it("client is not server", function () {
      assert.strictEqual(Meteor.isServer, false);
    });
  }

  if (Meteor.isServer) {
    it("server is not client", function () {
      assert.strictEqual(Meteor.isClient, false);
    });
  }
});
