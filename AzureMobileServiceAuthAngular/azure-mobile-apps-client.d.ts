/** Declaration file generated by dts-gen */
declare module "azure-mobile-apps-client"{
	export class MobileServiceClient {
		constructor(applicationUrl: any);

		invokeApi(...args: any[]): any;

		login(...args: any[]): any;

		loginWithOptions(...args: any[]): any;

		logout(...args: any[]): any;

		withFilter(serviceFilter: any): any;

	}

	export class Query {
		constructor(table: any, context: any, ...args: any[]);

		toOData(): any;

		static Providers: {
			OData: {
				fromOData: any;
				toOData: any;
				toQuery: any;
			};
		};

		static registerProvider(name: any, provider: any): any;

	}

	export namespace MobileServiceClient {
		namespace prototype {
			const alternateLoginHost: any;

			const loginUriPrefix: any;

			function invokeApi(...args: any[]): any;

			function login(...args: any[]): any;

			function loginWithOptions(...args: any[]): any;

			function logout(...args: any[]): any;

			function withFilter(serviceFilter: any): any;

			namespace invokeApi {
				const prototype: {
				};

			}

			namespace login {
				const prototype: {
				};

			}

			namespace loginWithOptions {
				const prototype: {
				};

			}

			namespace logout {
				const prototype: {
				};

			}

			namespace withFilter {
				const prototype: {
				};

			}

		}

	}

	export namespace Query {
		namespace Expressions {
			class QueryExpressionVisitor {
				constructor();

				BinaryExpression(node: any): any;

				ConstantExpression(node: any): any;

				InvocationExpression(node: any): any;

				LiteralExpression(node: any): any;

				MemberExpression(node: any): any;

				QueryExpression(node: any): any;

				UnaryExpression(node: any): any;

			}

			const BinaryOperators: {
				Add: string;
				And: string;
				Divide: string;
				Equal: string;
				GreaterThan: string;
				GreaterThanOrEqual: string;
				LessThan: string;
				LessThanOrEqual: string;
				Modulo: string;
				Multiply: string;
				NotEqual: string;
				Or: string;
				Subtract: string;
			};

			const Methods: {
				Ceiling: string;
				Concat: string;
				Day: string;
				Floor: string;
				IndexOf: string;
				Length: string;
				Month: string;
				Replace: string;
				Round: string;
				Substring: string;
				ToLowerCase: string;
				ToUpperCase: string;
				Trim: string;
				Year: string;
			};

			const UnaryOperators: {
				Decrement: string;
				Increment: string;
				Negate: string;
				Not: string;
			};

			function BinaryExpression(operator1: any, left1: any, right1: any): void;

			function ConstantExpression(value: any): void;

			function InvocationExpression(method: any, args: any): void;

			function LiteralExpression(queryString: any, args: any): void;

			function MemberExpression(member: any): void;

			function QueryExpression(): void;

			function UnaryExpression(operator1: any, operand: any): void;

			namespace BinaryExpression {
				const prototype: {
					type: string;
				};

				function groupClauses(operator: any, clauses: any): any;

				namespace groupClauses {
					// Too-deep object hierarchy from azure_mobile_apps_client.Query.Expressions.BinaryExpression.groupClauses
					const prototype: any;

				}

			}

			namespace ConstantExpression {
				const prototype: {
					type: string;
				};

				function groupClauses(operator: any, clauses: any): any;

				namespace groupClauses {
					// Too-deep object hierarchy from azure_mobile_apps_client.Query.Expressions.ConstantExpression.groupClauses
					const prototype: any;

				}

			}

			namespace InvocationExpression {
				const prototype: {
					type: string;
				};

				function groupClauses(operator: any, clauses: any): any;

				namespace groupClauses {
					// Too-deep object hierarchy from azure_mobile_apps_client.Query.Expressions.InvocationExpression.groupClauses
					const prototype: any;

				}

			}

			namespace LiteralExpression {
				const prototype: {
					type: string;
				};

				function groupClauses(operator: any, clauses: any): any;

				namespace groupClauses {
					// Too-deep object hierarchy from azure_mobile_apps_client.Query.Expressions.LiteralExpression.groupClauses
					const prototype: any;

				}

			}

			namespace MemberExpression {
				const prototype: {
					type: string;
				};

				function groupClauses(operator: any, clauses: any): any;

				namespace groupClauses {
					// Too-deep object hierarchy from azure_mobile_apps_client.Query.Expressions.MemberExpression.groupClauses
					const prototype: any;

				}

			}

			namespace QueryExpression {
				const prototype: {
					type: string;
				};

				function groupClauses(operator: any, clauses: any): any;

				namespace groupClauses {
					// Too-deep object hierarchy from azure_mobile_apps_client.Query.Expressions.QueryExpression.groupClauses
					const prototype: any;

				}

			}

			namespace QueryExpressionVisitor {
				namespace prototype {
					// Too-deep object hierarchy from azure_mobile_apps_client.Query.Expressions.QueryExpressionVisitor.prototype
					const BinaryExpression: any;

					// Too-deep object hierarchy from azure_mobile_apps_client.Query.Expressions.QueryExpressionVisitor.prototype
					const ConstantExpression: any;

					// Too-deep object hierarchy from azure_mobile_apps_client.Query.Expressions.QueryExpressionVisitor.prototype
					const InvocationExpression: any;

					// Too-deep object hierarchy from azure_mobile_apps_client.Query.Expressions.QueryExpressionVisitor.prototype
					const LiteralExpression: any;

					// Too-deep object hierarchy from azure_mobile_apps_client.Query.Expressions.QueryExpressionVisitor.prototype
					const MemberExpression: any;

					// Too-deep object hierarchy from azure_mobile_apps_client.Query.Expressions.QueryExpressionVisitor.prototype
					const QueryExpression: any;

					// Too-deep object hierarchy from azure_mobile_apps_client.Query.Expressions.QueryExpressionVisitor.prototype
					const UnaryExpression: any;

					// Too-deep object hierarchy from azure_mobile_apps_client.Query.Expressions.QueryExpressionVisitor.prototype
					const getSource: any;

					// Too-deep object hierarchy from azure_mobile_apps_client.Query.Expressions.QueryExpressionVisitor.prototype
					const visit: any;

				}

			}

			namespace UnaryExpression {
				const prototype: {
					type: string;
				};

				function groupClauses(operator: any, clauses: any): any;

				namespace groupClauses {
					// Too-deep object hierarchy from azure_mobile_apps_client.Query.Expressions.UnaryExpression.groupClauses
					const prototype: any;

				}

			}

		}

		namespace prototype {
			function toOData(): any;

			namespace toOData {
				const prototype: {
				};

			}

		}

		namespace registerProvider {
			const prototype: {
			};

		}

	}
}
