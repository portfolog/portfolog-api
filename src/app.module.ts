import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { PortfolioModule } from './portfolio/portfolio.module';
import { ProjectModule } from './project/project.module';
import { ArticleModule } from './article/article.module';

@Module({
  imports: [UserModule, PortfolioModule, ProjectModule, ArticleModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
