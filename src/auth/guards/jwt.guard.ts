import { AuthGuard } from '@nestjs/passport';
import { ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class JWTAuthGuard extends AuthGuard('jwt') {
    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        console.log('Inside JWT strategy canactivate')
        return super.canActivate(context)
    }
}
