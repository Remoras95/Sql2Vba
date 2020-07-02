# Sql2Vba
SQL to VBA text formatter

This tool is being built to help people who needs to extract data directly from the database to your Excel sheet using macros.

It works simply formatting your SQL query to a VBA readable format, for example:

            SQL                 |          VBA
    SELECT DATETIME((NOW())     | CSQL = "SELECT DADETIME(NOW()) "
    FROM DUAL                   | CSQL = CSQL & " FROM DUAL "
                                | myVBAvar = CSQL
                                
                                
This is a very simple project but is a first kick for something bigger.
