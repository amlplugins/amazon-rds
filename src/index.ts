/**
 * @amlplugins/amazon-rds
 *
 * Thin namespaced re-export of the native @aws-sdk/client-rds SDK.
 *
 * Symmetry rule (.claude/rules/definitions/ageni.md): every @amlplugins/google-*
 * package shares this shape — a single root index re-exporting the wrapped
 * vendor SDK with zero domain modeling on top.
 *
 * Amazon RDS — managed PostgreSQL/MySQL/MariaDB/Oracle/SQL Server/Aurora DB instances, clusters, snapshots.
 */

import * as _sdk from "@aws-sdk/client-rds";
export * from "@aws-sdk/client-rds";
export { _sdk as sdk };
export default _sdk;
