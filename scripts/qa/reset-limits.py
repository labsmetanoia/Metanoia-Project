#!/usr/bin/env python3
"""Clear the rate limiter in the LOCAL test database between test suites.

The suites register accounts and submit forms from one address, and the API limits
registrations to ten an hour per address, so each suite starts from a clean limiter.
Reads the database path from D1_SQLITE (the local .sqlite file wrangler creates).
It refuses to run without that variable, so it can never touch anything else.
"""
import os
import sqlite3
import sys

path = os.environ.get('D1_SQLITE', '')
if not path or not os.path.isfile(path):
    sys.exit('D1_SQLITE is not set to a local database file')
con = sqlite3.connect(path, timeout=10)
con.execute('DELETE FROM rate_limits')
con.commit()
print('rate limiter cleared')
