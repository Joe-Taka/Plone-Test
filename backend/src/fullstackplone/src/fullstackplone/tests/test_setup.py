"""Setup tests for this package."""
from fullstackplone.testing import FULLSTACKPLONE_INTEGRATION_TESTING
from plone import api
from plone.app.testing import setRoles
from plone.app.testing import TEST_USER_ID
from Products.CMFPlone.utils import get_installer

import unittest


class TestSetup(unittest.TestCase):
    """Test that fullstackplone is properly installed."""

    layer = FULLSTACKPLONE_INTEGRATION_TESTING

    def setUp(self):
        """Custom shared utility setup for tests."""
        self.portal = self.layer["portal"]
        self.setup = self.portal.portal_setup
        self.installer = get_installer(self.portal, self.layer["request"])

    def test_product_installed(self):
        """Test if fullstackplone is installed."""
        self.assertTrue(self.installer.is_product_installed("fullstackplone"))

    def test_browserlayer(self):
        """Test that IFULLSTACKPLONELayer is registered."""
        from fullstackplone.interfaces import IFULLSTACKPLONELayer
        from plone.browserlayer import utils

        self.assertIn(IFULLSTACKPLONELayer, utils.registered_layers())

    def test_latest_version(self):
        """Test latest version of default profile."""
        self.assertEqual(
            self.setup.getLastVersionForProfile("fullstackplone:default")[0],
            "20230412001",
        )


class TestUninstall(unittest.TestCase):

    layer = FULLSTACKPLONE_INTEGRATION_TESTING

    def setUp(self):
        self.portal = self.layer["portal"]
        self.installer = get_installer(self.portal, self.layer["request"])
        roles_before = api.user.get_roles(TEST_USER_ID)
        setRoles(self.portal, TEST_USER_ID, ["Manager"])
        self.installer.uninstall_product("fullstackplone")
        setRoles(self.portal, TEST_USER_ID, roles_before)

    def test_product_uninstalled(self):
        """Test if fullstackplone is cleanly uninstalled."""
        self.assertFalse(self.installer.is_product_installed("fullstackplone"))

    def test_browserlayer_removed(self):
        """Test that IFULLSTACKPLONELayer is removed."""
        from fullstackplone.interfaces import IFULLSTACKPLONELayer
        from plone.browserlayer import utils

        self.assertNotIn(IFULLSTACKPLONELayer, utils.registered_layers())
