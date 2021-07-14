import { AnySpecError } from '../../../error';
import { ASTNodeKind } from '../../../language';
import { ASTVisitor } from '../../../visitor';
import { ValidationContext } from '../../validationContext';

const POSTFIX = 'RequestBody';

export function RecommendedModelBodyFieldPostfix(context: ValidationContext): ASTVisitor {
  return {
    FieldDefinition(node) {
      if (node.name.value === 'body') {
        if (node.type.kind === ASTNodeKind.NAMED_TYPE) {
          if (!node.type.name.value?.endsWith(POSTFIX)) {
            context.reportError(
              new AnySpecError(
                `Type name of body field should ends with ${POSTFIX} postfix, did you mean ${node.type.name.value}${POSTFIX}`,
                node.type,
              ),
            );
          }
        }
      }
    },
  };
}
